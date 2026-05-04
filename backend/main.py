from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root API
@app.get("/")
def read_root():
    return {"message": "Roster Planner API running"}

# Add Staff
@app.post("/staff")
def create_staff(data: dict):
    name = data.get("name")
    role = data.get("role")
    availability = data.get("availability")

    # Validation
    if not name:
        raise HTTPException(status_code=400, detail="Name required")
    if not role:
        raise HTTPException(status_code=400, detail="Role required")

    response = supabase.table("staff").insert({
        "name": name,
        "role": role,
        "availability": availability
    }).execute()

    return response.data

# Get All Staff
@app.get("/staff")
def get_staff():
    response = supabase.table("staff").select("*").execute()
    return response.data

# Seed Data
@app.post("/seed")
def seed_data():
    supabase.table("staff").insert([
        {"name": "John", "role": "Waiter", "availability": "Morning"},
        {"name": "Anna", "role": "Chef", "availability": "Evening"}
    ]).execute()

    return {"message": "Sample data inserted"}

# Delete Data
@app.delete("/staff/{staff_id}")
def delete_staff(staff_id: int):
    response = supabase.table("staff").delete().eq("id", staff_id).execute()
    return {"message": "Staff deleted"}