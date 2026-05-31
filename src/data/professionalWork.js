export const professionalExperiences = [
  {
    designation: 'Software Engineer',
    company: 'Onsite Electro Services (Onsitego)',
    period: 'August 2024-Present',
    projects: [
      {
        title: 'Data Synchronization Pipeline',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer',
        year: '2026',
        overview: 'Due to integration of a new ERP system, a real-time data synchronization pipeline was to be built to ensure seamless data flow between the new ERP and existing systems. The pipeline was designed to handle high volumes of data with low latency while ensuring data consistency and fault tolerance.',
        approach: 'On a higher level, the pipeline was architected as a seperate service which captured data creation and modification events from the backend and fed into an asynchronous rabbitmq-based queue. A consumer service was built to process the queued event and perform an API call to the new ERP sytem and create or update the corresponding record. A failure handling mechanism was implemented to retry failed entities using a scheduled job, and a monitoring dashboard was built to track synchronization status and performance metrics.',
        features: [
          'Event-driven architecture using RabbitMQ for asynchronous processing',
          'Real-time data capture and synchronization with the new ERP system',
          'Fault-tolerant design with retry mechanisms for failed synchronizations',
          'Monitoring dashboard for tracking synchronization status and performance metrics',
          'Scalable architecture to handle increasing data volumes',
          'Data transformation and mapping to ensure compatibility between systems',
          'Logging and alerting for synchronization failures and performance issues'
        ],
        results: [
          {value: 'Real-time', description: 'Data synchronization with low latency'},
        ],
      },

      {
        title: 'Asynchronous Cloud Based Export Service',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer',
        year: '2025',
        overview: 'The various types of datasets grew up to contain millions of records, and hence the reports and other exporting services were getting choked up and timed out due to the same reason. To solve this problem, an asynchronous cloud-based export service was designed and implemented to handle large data exports efficiently while providing a seamless user experience.',
        approach: 'The exporting service was centralized and decoupled from the main application, allowing it to operate independently and scale as needed. When a user initiated an export request, the service would validate the request parameters and enqueue the export job in a message queue. A worker service was implemented to process the queued jobs asynchronously, generating the export files in the background. The generated files were then stored in a cloud storage solution (AWS S3), and users were notified in realtime with a download link once their export was ready.',
        features: [
          "Asynchronous processing using message queues to handle export jobs",
          "Cloud storage integration (AWS S3) for scalable and reliable file storage",
          "Real-time notifications to users when their export is ready",
          "Support for various export formats (CSV, Excel, PDF)",
          "Robust error handling and retry mechanisms for failed export jobs",
          "Monitoring and logging for export job status and performance metrics",
          "Scalable architecture to handle increasing export requests and data volumes"
        ],
        results: [
          {value: 'Real-time', description: 'Data synchronization with low latency'},

        ],
      },

      {
        title: 'LLM Based Customer Support Chatbot',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer',
        year: '2025',
        overview: 'Observing a repetitive pattern in customer support queries on Terms and Conditions, a decision was made to implement an LLM-based customer support chatbot to provide instant responses to common queries and improve overall customer satisfaction.',
        approach: 'A LLM-based pipeline was setup using Gemini API. Qdrant database was used as a vector database to store TnC documents and previous queries to perform a sementic search. The search results were fed into Gemini API to provide enough information to be able to answer the query. The chatbot was integrated into the existing customer support system, allowing customers to interact with it through a user-friendly interface. Continuous monitoring and feedback mechanisms were implemented to improve the chatbot\'s performance and accuracy over time.',
        features: [
          "LLM-based architecture using Gemini API for natural language understanding and response generation",
          "Integration with existing customer support system for seamless user experience",
          "Semantic search using Qdrant vector database to retrieve relevant information",
          "Real-time responses to customer queries, improving satisfaction and reducing response times",
          "Continuous learning and improvement based on user interactions and feedback",
          "Support for a wide range of common queries related to Terms and Conditions",
          "Monitoring and analytics to track chatbot performance and user engagement"
        ],
        results: [
          {value: 'Real-time', description: 'Data synchronization with low latency'},
          
        ],
      },

      {
        title: 'Inventory Management System Restructuring',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer',
        year: '2026',
        overview: 'On extending the inventory management system to support bin and rack level tracking, a remodeling of the existing system was undertaken to accommodate the new requirements while ensuring data integrity and existing transaction and movement operations to function without any disruption.',
        approach: 'A backward compatible design was implemented to remodel the inventory management system. The database schema was updated to include new tables for bins and racks, while maintaining existing tables for items and transactions. The application logic was modified to support the new tracking levels, allowing users to assign items to specific bins and racks. Data migration scripts were developed to populate the new tables with existing inventory data, ensuring a smooth transition without any data loss. The remodeled system was thoroughly tested to validate its functionality and performance before deployment.',
        features: [
          "Backward compatible design to remodel the inventory management system without disrupting existing operations",
          "Database schema updates to include new tables for bins and racks while maintaining existing tables",
          "Application logic modifications to support new tracking levels for items in bins and racks",
          "Data migration scripts to populate new tables with existing inventory data, ensuring a smooth transition",
          "Thorough testing to validate functionality and performance of the remodeled system before deployment",
          "Improved inventory tracking and management capabilities with bin and rack level granularity",
          "Enhanced reporting and analytics based on the new tracking levels"
        ],
        results: [
          {value: 'Real-time', description: 'Data synchronization with low latency'},
          
        ],
      },

      {
        title: 'Search Latency Optimization',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer',
        year: '2024',
        overview: 'Due to the implementation of data encryption, the search APIs were affected with latency issues to the encryption middleware, which in turn created a new challenge to provide an optimal and fast search experience to users while ensuring data security and compliance with encryption requirements.',
        approach: 'The existing search APIs were restructured to run once and cache the decryped results in redis. And redis-search service was integrated into the system to enable index based searching on the cached data. The search queries were modified to utilize the new caching mechanism, allowing for faster retrieval of search results while maintaining data security through encryption. Performance monitoring and optimization techniques were implemented to ensure that the search latency was significantly reduced without compromising on security.',
        features: [
          "Restructured search APIs to run once and cache decrypted results in Redis for faster retrieval",
          "Integration of Redis Search service to enable index-based searching on cached data",
          "Modified search queries to utilize the new caching mechanism while maintaining data security through encryption",
          "Performance monitoring and optimization techniques to ensure significant reduction in search latency without compromising security",
          "Improved search experience for users with faster response times while ensuring compliance with encryption requirements",
          "Scalable caching solution to handle increasing search volumes and data sizes",
          "Robust error handling and fallback mechanisms in case of cache failures or misses"
        ],
        results: [
          {value: 'Real-time', description: 'Data synchronization with low latency'},
          
        ],
      },
    ],
  },


  {
    designation: 'Software Engineer Intern',
    company: 'Onsite Electro Services (Onsitego)',
    period: 'June 2023-July 2024',
    projects: [
      {
        title: 'Fraud Prevention API',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer Intern',
        year: '2024',
        overview: 'The company was facing a significant issue with fraudulent orders with unservicable devices from some partner retailers. Due to which a huge loss was being incurred on the company. To solve this problem, a fraud prevention API was designed and implemented to identify and prevent fraudulent orders in real-time, thereby reducing financial losses and improving overall business security.',
        approach: 'To prevent the fraudulent orders, a layer of validation was added in the existing order flow, which checked the device details against a set of values gathered from past fraudulent order data. The checks were implemented on a fuzzy matching algorithm to ensure that even if the device details were slightly modified, they could still be identified as fraudulent. The API was integrated into the existing order processing system, allowing for real-time validation of orders before they were processed. Continuous monitoring and updates were implemented to improve the accuracy of the fraud detection mechanism over time.',
        features: [
          "Real-time validation of orders against a database of known fraudulent device details",
          "Fuzzy matching algorithm to identify fraudulent orders even with slight modifications in device details",
          "Integration with existing order processing system for seamless user experience",
          "Continuous monitoring and updates to improve accuracy of fraud detection mechanism over time",
          "Reduction in financial losses due to fraudulent orders and improved business security",
          "Scalable architecture to handle increasing order volumes and evolving fraud patterns",
          "Robust error handling and fallback mechanisms in case of API failures or false positives"
        ],
        results: [],
      },

      {
        title: 'Asynchronous Emailing Service',
        url: '',
        image: '',
        hoverImage: '',
        client: 'Onsite Electro Services',
        role: 'Software Engineer Intern',
        year: '2023',
        overview: 'Due to the large number of reports being demanded by the various other teams in the company, an automated asynchronous emailing service was designed and implemented to efficiently handle the generation and delivery of reports via email, improving communication and productivity across teams.',
        approach: 'To handle the large volume of report generation and emailing, a rabbitmq based queue was implemented to manage the email sending pipeline. Where each report generation request was enqueued and a Mandrill API based email sending service was implemented to process the queued requests asynchronously. The service generated the required reports in the background and sent them via email to the respective recipients. Real-time notifications were implemented to inform users about the status of their report generation and delivery, ensuring a seamless user experience.',
        features: [
          "Asynchronous processing of email sending requests using RabbitMQ to handle high volumes efficiently",
          "Integration with Mandrill API for reliable email delivery",
          "Real-time notifications to users about the status of their report generation and delivery",
          "Support for various report formats and customizable email templates",
          "Robust error handling and retry mechanisms for failed email sending attempts",
          "Monitoring and analytics to track email sending performance and user engagement",
          "Scalable architecture to accommodate increasing demand for report generation and emailing"
        ],
        results: [],
      },
    ],
  },
]
