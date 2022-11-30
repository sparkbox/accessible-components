import { marked } from 'marked';

export const rowStart = (markdown) => {
  const htmlFromMd = marked.parse(markdown.replace(/\\/g, ''), {
    breaks: true,
  });

  switch (true) {
    case htmlFromMd.length < 100:
      return 1;

    case htmlFromMd.length > 100 && htmlFromMd.length < 300:
      return 2;

    case htmlFromMd.length > 300:
      return 3;
    default:
      return 1;
  }
};

const specificationBlocks = {
  'Focus Expectations': {
    rowStart,
    // numberOfRows: 1,
  },
  'Semantic Elements': {
    rowStart,
    // numberOfRows: 1,
    // columnStart: 2,
  },
  'Aria Attributes': {
    rowStart,
    // numberOfRows: 1,
  },
  'Keyboard Interactions': {
    rowStart,
    // numberOfRows: 1,
  },
  'Additional Resources': {
    rowStart,
    // numberOfRows: 1,
  },
};

export const masonryDetails = {
  accordion: specificationBlocks,
  dialog: specificationBlocks,
  disclosure: specificationBlocks,
  tabs: specificationBlocks,
};
