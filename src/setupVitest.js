import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

// this will universally enable mocks on fetch throughout entire test suite
