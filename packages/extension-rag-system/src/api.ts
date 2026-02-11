export {
  documentIndexService,
  type DocumentSearchScope,
  type IndexedDocument,
  type DocumentIndexOptions,
} from './document-index-service';
export { embeddingService, type EmbeddingOptions } from './embedding-service';
export {
  ragService,
  searchWorkspaceDocuments,
  type RAGSearchOptions,
  type RAGSearchResult,
} from './rag-service';
export {
  ragPromptEnhancer,
  createRAGToolExecutor,
  registerRAGCommands,
  integrateRAGWithAI,
} from './rag-integration';
export type { VectorEmbedding, IndexValues, SampleVector } from './vector-utils';
export { euclideanDistance, cosineSimilarity, createIndexValuesFromArray, getIndexValueArray } from './vector-utils';
export {
  createEditorScope,
  createDirectoryScope,
  createFileTypeScope,
  combineScopes,
} from './utils/context-scopes';
export type { ContextScopeProvider } from './utils/context-scopes';
