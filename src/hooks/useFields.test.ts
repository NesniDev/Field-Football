import { describe, expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useFields } from "./useFields";

vi.mock('./useFields', () => ({
  useFields: () => ({
    results: [],
    query: '',
    setQuery: vi.fn(),
    handleSubmit: vi.fn(),
    clean: vi.fn()
  })
}))

describe('useFields', () => {
  test('should return the correct values', () => {
    const {result} = renderHook(() => useFields())
    

    expect(result.current.handleSubmit).toBeInstanceOf(Function)
    expect(result.current.clean).toBeInstanceOf(Function)
  })
})
