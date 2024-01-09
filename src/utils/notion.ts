import 'server-only';

import { Client } from '@notionhq/client';
import { cache } from 'react';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getPages = cache(() => {
  return notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Status',
      select: {
        equals: 'Posting',
      },
    },
  });
});

export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});
