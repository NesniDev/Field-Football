import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useReservations } from "./useReservations";

vi.mock('./useReservations', () => ({
  useReservations: () => ({
    results: [],
    query: '',
    setQuery: vi.fn(),
    handleSubmit: vi.fn(),
    clean: vi.fn()
  })
}))

describe('useReservation', () => {
  test('should return the correct values', () => {
    const {result} = renderHook(() => useReservations())
    
    expect(result.current.fieldName).toBeUndefined()
    expect(result.current.fieldImage).toBeUndefined()
    expect(result.current.formattedDate).toBeUndefined()
    expect(result.current.info).toBeUndefined()
    expect(result.current.price).toBeUndefined()
    expect(result.current.startTime).toBeUndefined()
  })
})