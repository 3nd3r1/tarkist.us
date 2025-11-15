from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class CVEAnalysisAgentRequest(BaseModel):
    """Request schema for CVE analysis agent."""


class CVEAnalysisAgentResponse(BaseModel):
    """Response schema for CVE analysis agent."""


class CVEAnalysisAgent(BaseAgent):
    input_model = CVEAnalysisAgentRequest
    output_model = CVEAnalysisAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(self, input_data: CVEAnalysisAgentRequest) -> CVEAnalysisAgentResponse:
        return await super().execute(input_data)
