# Architecture

User Uploads PDF/DOCX
-> Client Chunking (500 tokens)
-> Local Embeddings (all-MiniLM-L6-v2)
-> In-Memory Vector Search
-> Top 3 Chunks + AI Answer

0$ Cost Proof: No API, No Pinecone, All Local
