from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class TrustScoreAgentRequest(BaseModel):
    """Request schema for trust score agent."""


class TrustScoreAgentResponse(BaseModel):
    """Response schema for trust score agent."""


class TrustScoreAgent(BaseAgent):
    input_model = TrustScoreAgentRequest
    output_model = TrustScoreAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(self, input_data: TrustScoreAgentRequest) -> TrustScoreAgentResponse:
        return await super().execute(input_data)
