import rateLimiterImage from '../assets/ratelimiter1.png'
import rateLimiterImageHover from '../assets/ratelimiter2.png'
import searchEngine1 from '../assets/searchengine1.png'
import searchengine2 from '../assets/searchengine2.png'
import codeEngine1 from '../assets/codeengine1.png'
import codeEngine2 from '../assets/codeengine2.png'




export const personalProjects = [
  {
    title: 'Distributed Search Engine with AI',
    url: '',
    image: searchEngine1,
    hoverImage: searchengine2,
    client: 'Personal Project',
    role: 'Software Engineer',
    year: '2026',
    overview: 'Built a distributed search platform capable of indexing and retrieving large datasets with low latency while integrating AI-powered search capabilities. The system was designed to simulate production-scale search infrastructure with emphasis on scalability, fault tolerance, and intelligent retrieval.',
    approach: 'Designed the system using a distributed architecture with asynchronous indexing pipelines, caching layers, and optimized query execution. Implemented AI-powered retrieval capabilities to improve search relevance and natural language querying while focusing heavily on performance optimization and scalability.',
    features: [
      'Distributed indexing pipeline for scalable ingestion',
      'AI-powered semantic search and natural language querying',
      'Caching layer for reducing repeated query overhead',
      'Low latency search across large datasets',
      'Asynchronous processing using event-driven architecture',
      'Search ranking and relevance optimization',
      'Fault tolerant architecture with independently scalable services',
      'Metrics and monitoring for search performance'
    ],
    results: [
      {value: '700K+', description: 'Records searchable across datasets'},
      {value: '~96%', description: 'Lower search response times'},
      {value: '<200ms', description: 'Typical query latency'},
      {value: 'Multi-Service', description: 'Independently scalable components'}
    ],
  },
  {
    title: 'Remote Code Execution Engine',
    url: '',
    image: codeEngine1,
    hoverImage: codeEngine2,
    client: 'Personal Project',
    role: 'Software Engineer',
    year: '2025',
    overview: 'Built a distributed remote code execution platform capable of securely executing user-submitted programs inside isolated containers. The system was designed to simulate production-grade execution environments with emphasis on scalability, fault isolation, and asynchronous job processing.',
    approach: 'Designed the platform around an asynchronous queue-based architecture using Redis for job orchestration and Docker for secure execution isolation. Focused on building independently scalable execution pipelines while ensuring safe resource management, timeout handling, and multi-language support.',
    features: [
      'Containerized execution using Docker isolation',
      'Multi-language support including Java, Python, C++, and JavaScript',
      'Asynchronous job processing using Redis queues',
      'Secure sandboxed execution with timeout controls',
      'Real-time job tracking and status updates',
      'Output capture and execution logging',
      'Horizontally scalable worker architecture',
      'Queue-backed scheduling and execution pipeline'
    ],
    results: [
      {value: '4+', description: 'Programming languages supported'},
      {value: 'Containerized', description: 'Secure isolated execution'},
      {value: 'Async', description: 'Queue-based execution pipeline'},
      {value: 'Scalable', description: 'Independently expandable workers'}
    ],
  },
  {
    title: 'Distributed Rate Limiter',
    url: '',
    image: rateLimiterImage,
    hoverImage: rateLimiterImageHover,
    client: 'Personal Project',
    role: 'Software Engineer',
    year: '2025',
    overview: 'Built a distributed API gateway designed to protect backend services from traffic spikes, abuse, and malicious activity through reactive rate limiting and asynchronous threat detection. The system focused on low-latency decision making while remaining horizontally scalable.',
    approach: 'Designed the gateway using a reactive architecture with Spring WebFlux to handle high concurrency workloads efficiently. Implemented Redis-backed atomic decision making using Lua scripts for consistency across distributed instances and integrated event-driven abuse detection using Kafka.',
    features: [
      'Reactive API gateway built using Spring WebFlux',
      'Multiple rate limiting strategies including Token Bucket and Sliding Window',
      'Atomic Redis Lua scripts for distributed coordination',
      'Kafka-driven asynchronous abuse detection pipeline',
      'Automatic malicious IP blocking using TTL-based bans',
      'Distributed architecture supporting multiple gateway instances',
      'Low-latency request filtering and routing',
      'Real-time monitoring and traffic control mechanisms'
    ],
    results: [
      {value: '<1ms', description: 'Rate limit decision latency'},
      {value: 'Reactive', description: 'High concurrency request handling'},
      {value: 'Distributed', description: 'Multi-instance gateway support'},
      {value: 'Automated', description: 'Abuse detection and blocking'}
    ],
  }
]
