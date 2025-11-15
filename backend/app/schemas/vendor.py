from pydantic import BaseModel, Field

from app.schemas.location import Location


class Vendor(BaseModel):
    name: str = Field(..., description="Official company/vendor name")
    website: str | None = None
    location: Location | None = None
    founded_year: int | None = None

    employee_count: int | None = None
    revenue: str | None = None

    privacy_policy_url: str | None = None
    terms_of_service_url: str | None = None
    security_contact: str | None = None

    parent_company: str | None = None
    subsidiaries: list[str] = []

    industry: str | None = None
    business_model: str | None = None
    key_executives: list[str] = []
