from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class IncidentAnalysisAgentRequest(BaseModel):
    """Request schema for incident analysis agent."""


class IncidentAnalysisAgentResponse(BaseModel):
    """Response schema for incident analysis agent."""


class IncidentAnalysisAgent(BaseAgent):
    input_model = IncidentAnalysisAgentRequest
    output_model = IncidentAnalysisAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(
        self, input_data: IncidentAnalysisAgentRequest
    ) -> IncidentAnalysisAgentResponse:
        return await super().execute(input_data)
