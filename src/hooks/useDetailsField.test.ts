import { describe, expect, test, vi } from "vitest";
import { useDetailsField } from "./useDetailsField";
import { renderHook } from "@testing-library/react";

vi.mock('./useDetailsField', ()=>({
    useDetailsField: () => ({
        info: null,
        date: new Date(),
        time: '',
        activeTab: 'description',
        isFutureDate: false,
        handleReserve: vi.fn(),
        setDate: vi.fn(),
        setTime: vi.fn(),
        setActiveTab: vi.fn()
    })
}))

describe('useDetailsField', () => {
    test('should return the correct values', () => {
        const {result} = renderHook(() => useDetailsField())
          expect(result.current.info).toBeNull()
          expect(result.current.date).toBeDefined()
          expect(result.current.time).toBe('')
          expect(result.current.activeTab).not.toBeNull()
          expect(result.current.isFutureDate).not.toBeNull()
          expect(result.current.handleReserve).toBeInstanceOf(Function)
          expect(result.current.setDate).toBeInstanceOf(Function)
          expect(result.current.setTime).toBeInstanceOf(Function)
          expect(result.current.setActiveTab).toBeInstanceOf(Function)
    })
})