import type { SupabaseClient } from '@supabase/supabase-js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerRecommendModel } from './tools/recommend-model.js';
import { registerCompareModels } from './tools/compare-models.js';
import { registerGetPricing } from './tools/get-pricing.js';
import { registerCheckPriceChanges } from './tools/check-price-changes.js';
import { registerEstimateCost } from './tools/estimate-cost.js';
import { registerFindCheapestCapable } from './tools/find-cheapest-capable.js';

/**
 * Create a new McpServer instance with all tools registered.
 * Each session gets its own server instance (per SDK pattern).
 */
export function createWhichModelServer(supabase: SupabaseClient): McpServer {
  const server = new McpServer({
    name: 'whichmodel',
    version: '0.1.0',
  });

  registerRecommendModel(server, supabase);
  registerCompareModels(server, supabase);
  registerGetPricing(server, supabase);
  registerCheckPriceChanges(server, supabase);
  registerEstimateCost(server, supabase);
  registerFindCheapestCapable(server, supabase);

  return server;
}
