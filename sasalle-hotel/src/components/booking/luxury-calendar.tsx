"use client";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  isWithinInterval,
  parseISO,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

interface LuxuryCalendarProps {
  checkIn?: string;
  checkOut?: string;
  onSelectRange: (checkIn: string, checkOut: string) => void;
}

export function LuxuryCalendar({
  checkIn,
  checkOut,
  onSelectRange,
}: LuxuryCalendarProps) {
  const [viewMonth, setViewMonth] = useState(startOfMonth(startOfToday()));
  const today = startOfToday();

  const days = useMemo(() => {
    const start = startOfMonth(viewMonth);
    const end = endOfMonth(viewMonth);
    return eachDayOfInterval({ start, end });
  }, [viewMonth]);

  const checkInDate = checkIn ? parseISO(checkIn) : undefined;
  const checkOutDate = checkOut ? parseISO(checkOut) : undefined;

  const handleDayClick = (day: Date) => {
    if (isBefore(day, today)) return;
    const iso = format(day, "yyyy-MM-dd");
    if (!checkInDate || (checkInDate && checkOutDate)) {
      onSelectRange(iso, "");
      return;
    }
    if (isBefore(day, checkInDate)) {
      onSelectRange(iso, "");
      return;
    }
    onSelectRange(format(checkInDate, "yyyy-MM-dd"), iso);
  };

  return (
    <div className="border border-outline-variant/20 p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewMonth(addMonths(viewMonth, -1))}
          className="font-label-caps text-outline hover:text-primary"
          aria-label="Previous month"
        >
          Prev
        </button>
        <span className="font-display text-[18px] text-primary">
          {format(viewMonth, "MMMM yyyy")}
        </span>
        <button
          type="button"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          className="font-label-caps text-outline hover:text-primary"
          aria-label="Next month"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <span key={d} className="font-label-caps py-2 text-[10px] text-outline">
            {d}
          </span>
        ))}
        {Array.from({ length: startOfMonth(viewMonth).getDay() }).map((_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {days.map((day) => {
          const disabled = isBefore(day, today);
          const selected =
            (checkInDate && isSameDay(day, checkInDate)) ||
            (checkOutDate && isSameDay(day, checkOutDate));
          const inRange =
            checkInDate &&
            checkOutDate &&
            isWithinInterval(day, { start: checkInDate, end: checkOutDate });

          return (
            <button
              key={day.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => handleDayClick(day)}
              className={cn(
                "aspect-square text-sm transition-colors",
                disabled && "text-outline-variant/40",
                !disabled && "hover:bg-surface-container-low",
                selected && "bg-primary text-on-primary",
                inRange && !selected && "bg-surface-container",
              )}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
