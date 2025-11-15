from uuid import uuid1

from fastapi import APIRouter, Depends
from pydantic import UUID1, BaseModel

from app.dependencies import get_assessment_service
from app.services.assessment import AssessmentService

router = APIRouter()


class AssessmentCreateRequest(BaseModel):
    name: str
    vendor_name: str | None
    url: str | None


class AssessmentCreateResponse(BaseModel):
    assesment_id: UUID1


@router.post("", response_model=AssessmentCreateResponse)
async def create_assesment(
    request: AssessmentCreateRequest,
    assessment_service: AssessmentService = Depends(get_assessment_service),
):
    return AssessmentCreateResponse(assesment_id=uuid1())


@router.get("")
def get_assesments():
    return "List of assesments"


@router.get("/{assesment_id}")
def get_assesment(assesment_id: int):
    return f"Details of assesment {assesment_id}"


@router.get("/{assesment_id}/status")
def get_assesment_status(assesment_id: int):
    return f"Details of assesment {assesment_id}"


@router.delete("/{assesment_id}")
def delete_assesment(assesment_id: int):
    return f"Assesment {assesment_id} deleted"


@router.put("/{assesment_id}/report")
def generate_assesment_report(assesment_id: int):
    return f"Report for assesment {assesment_id} generated"


@router.put("/{assesment_id}/report/export?format={export_format}")
def export_assesment_report(assesment_id: int, export_format: str):
    return f"Report for assesment {assesment_id} exported in {export_format} format"
