from enum import Enum

from pydantic import BaseModel, Field


class EntityCategory(str, Enum):
    # Communication & Collaboration
    CHAT = "chat"
    VIDEO_CONFERENCING = "video_conferencing"
    EMAIL_SERVICE = "email_service"
    MESSAGING = "messaging"
    TEAM_COLLABORATION = "team_collaboration"
    SOCIAL_MEDIA = "social_media"
    FORUM = "forum"

    # File Management & Storage
    FILESHARING = "filesharing"
    CLOUD_STORAGE = "cloud_storage"
    DOCUMENT_MANAGEMENT = "document_management"
    BACKUP_SOLUTION = "backup_solution"
    CDN = "cdn"

    # Development & IT Tools
    CODE_REPOSITORY = "code_repository"
    CI_CD = "ci_cd"
    CONTAINER_PLATFORM = "container_platform"
    CLOUD_PLATFORM = "cloud_platform"
    API_MANAGEMENT = "api_management"
    MONITORING_LOGGING = "monitoring_logging"
    DATABASE = "database"
    VERSION_CONTROL = "version_control"
    PROJECT_MANAGEMENT = "project_management"
    ISSUE_TRACKING = "issue_tracking"

    # AI & Machine Learning
    GEN_AI_TOOL = "gen_ai_tool"
    ML_PLATFORM = "ml_platform"
    AI_API_SERVICE = "ai_api_service"
    CHATBOT = "chatbot"
    ANALYTICS_AI = "analytics_ai"

    # Business Applications
    CRM = "crm"
    ERP = "erp"
    HR_SOFTWARE = "hr_software"
    ACCOUNTING_FINANCE = "accounting_finance"
    E_COMMERCE = "e_commerce"
    MARKETING_AUTOMATION = "marketing_automation"
    SALES_AUTOMATION = "sales_automation"
    CUSTOMER_SUPPORT = "customer_support"
    INVENTORY_MANAGEMENT = "inventory_management"
    SUPPLY_CHAIN = "supply_chain"

    # Security & Compliance
    IDENTITY_MANAGEMENT = "identity_management"
    ACCESS_CONTROL = "access_control"
    VPN = "vpn"
    FIREWALL = "firewall"
    ANTIVIRUS = "antivirus"
    VULNERABILITY_SCANNER = "vulnerability_scanner"
    SIEM = "siem"
    ENDPOINT_PROTECTION = "endpoint_protection"
    DATA_LOSS_PREVENTION = "data_loss_prevention"
    COMPLIANCE_MANAGEMENT = "compliance_management"
    ENCRYPTION_TOOLS = "encryption_tools"
    PASSWORD_MANAGER = "password_manager"

    # Analytics & BI
    BUSINESS_INTELLIGENCE = "business_intelligence"
    ANALYTICS_PLATFORM = "analytics_platform"
    DATA_VISUALIZATION = "data_visualization"
    REPORTING_TOOLS = "reporting_tools"
    WEB_ANALYTICS = "web_analytics"

    # Content & Media
    CMS = "cms"
    DIGITAL_ASSET_MANAGEMENT = "digital_asset_management"
    VIDEO_STREAMING = "video_streaming"
    PODCAST_PLATFORM = "podcast_platform"
    DESIGN_TOOLS = "design_tools"

    # E-learning & Training
    LMS = "lms"
    ONLINE_COURSE_PLATFORM = "online_course_platform"
    WEBINAR_PLATFORM = "webinar_platform"
    TRAINING_SOFTWARE = "training_software"

    # Productivity & Office
    OFFICE_SUITE = "office_suite"
    NOTE_TAKING = "note_taking"
    CALENDAR_SCHEDULING = "calendar_scheduling"
    TASK_MANAGEMENT = "task_management"
    PRESENTATION_TOOLS = "presentation_tools"

    # Infrastructure & Networking
    DNS_SERVICE = "dns_service"
    LOAD_BALANCER = "load_balancer"
    WEB_SERVER = "web_server"
    APPLICATION_SERVER = "application_server"
    MESSAGE_QUEUE = "message_queue"
    CACHE_SERVICE = "cache_service"

    # Payments & Financial
    PAYMENT_PROCESSOR = "payment_processor"
    CRYPTOCURRENCY = "cryptocurrency"
    BANKING_API = "banking_api"
    INVOICING = "invoicing"
    EXPENSE_MANAGEMENT = "expense_management"

    # Communications Infrastructure
    SMS_SERVICE = "sms_service"
    EMAIL_MARKETING = "email_marketing"
    PUSH_NOTIFICATION = "push_notification"
    TELEPHONY = "telephony"

    # Industry Specific
    HEALTHCARE_SOFTWARE = "healthcare_software"
    LEGAL_SOFTWARE = "legal_software"
    REAL_ESTATE_SOFTWARE = "real_estate_software"
    MANUFACTURING_SOFTWARE = "manufacturing_software"
    RETAIL_SOFTWARE = "retail_software"
    LOGISTICS_SOFTWARE = "logistics_software"

    # Mobile & Web
    MOBILE_APP_PLATFORM = "mobile_app_platform"
    WEB_HOSTING = "web_hosting"
    DOMAIN_REGISTRAR = "domain_registrar"
    SSL_CERTIFICATE = "ssl_certificate"

    # IoT & Hardware
    IOT_PLATFORM = "iot_platform"
    HARDWARE_DEVICE = "hardware_device"
    SENSOR_PLATFORM = "sensor_platform"

    # Other/Generic
    API_SERVICE = "api_service"
    INTEGRATION_PLATFORM = "integration_platform"
    AUTOMATION_TOOL = "automation_tool"
    UTILITY_SOFTWARE = "utility_software"
    MARKETPLACE = "marketplace"
    SEARCH_ENGINE = "search_engine"
    TRANSLATION_SERVICE = "translation_service"
    WEATHER_SERVICE = "weather_service"
    MAPS_LOCATION = "maps_location"
    NEWS_MEDIA = "news_media"
    GAMING_PLATFORM = "gaming_platform"
    DATING_APP = "dating_app"
    TRAVEL_BOOKING = "travel_booking"
    FOOD_DELIVERY = "food_delivery"
    RIDE_SHARING = "ride_sharing"
    STREAMING_SERVICE = "streaming_service"
    MUSIC_PLATFORM = "music_platform"
    FITNESS_APP = "fitness_app"
    UNKNOWN = "unknown"


class EntityVendor(BaseModel):
    name: str = Field(..., description="The name of the vendor")
    website: str | None = Field(None, description="The vendor's website URL")
    logo_url: str | None = Field(None, description="URL to the vendor's logo image")


class Entity(BaseModel):
    name: str = Field(..., description="The name of the product")
    vendor: EntityVendor = Field(..., description="The vendor of the product")
    category: EntityCategory = Field(..., description="The category of the product")
    description: str = Field(..., description="A brief description of the product")
    usage: str = Field(..., description="How the product is typically used")
    website: str | None = Field(None, description="The product's website URL")
    logo_url: str | None = Field(None, description="URL to the product's logo image")
