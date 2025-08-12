// components/ServiceAnnouncements.js
import { useState, useEffect } from "react";
import { format, nextDay, isBefore, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";

// ===== CONFIG =====
const CONGRESS_START = new Date(2025, 10, 15); // Nov 15, 2025 (month is 0-based)
const CONGRESS_END = new Date(2025, 10, 17);
const ANNOUNCE_DAYS_BEFORE = 90; // Change to tweak when Congress mode starts

const WEDNESDAY_TIME = "19:00"; // 7:00 PM
const SUNDAY_TIME = "10:00"; // 10:00 AM

export default function ServiceAnnouncements() {
  const [mode, setMode] = useState("services"); // "services" or "congress"
  const [nextServices, setNextServices] = useState([]);

  useEffect(() => {
    const today = new Date();
    const daysUntilCongress = differenceInDays(CONGRESS_START, today);

    if (daysUntilCongress <= ANNOUNCE_DAYS_BEFORE) {
      setMode("congress");
    } else {
      setMode("services");
      setNextServices(getNextServices(today));
    }
  }, []);

  function getNextServices(today) {
    const nextWed = getNextDayWithTime(today, 3, WEDNESDAY_TIME); // 0=Sun, 3=Wed
    const nextSun = getNextDayWithTime(today, 0, SUNDAY_TIME);
    const upcoming = [nextWed, nextSun].filter((date) => isBefore(today, date));
    return upcoming;
  }

  function getNextDayWithTime(baseDate, dayOfWeek, timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    let date = nextDay(baseDate, dayOfWeek);
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {mode === "services" && (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              📅 This Week at Agape
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {nextServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                >
                  <h3 className="text-xl font-semibold">
                    {service.getDay() === 0 ? "Sunday Service" : "Wednesday Service"}
                  </h3>
                  <p className="text-gray-600">
                    {format(service, "EEEE, MMM d • h:mm a", { locale: es })}
                  </p>
                  <a
                    href="/plan-your-visit"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Plan Your Visit
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {mode === "congress" && (
          <div className="bg-yellow-100 rounded-xl shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-yellow-900 mb-4">
              🎉 Anniversary Congress 2025
            </h2>
            <p className="text-lg text-yellow-800 mb-2">
              {format(CONGRESS_START, "MMM d", { locale: es })} –{" "}
              {format(CONGRESS_END, "MMM d, yyyy", { locale: es })}
            </p>
            <p className="mb-4 text-gray-700">
              Join us for 3 days of powerful worship, word, and fellowship.
            </p>
            <p className="text-lg font-semibold text-yellow-900 mb-4">
              ⏳ {differenceInDays(CONGRESS_START, new Date())} days to go
            </p>
            <a
              href="/congress-rsvp"
              className="bg-yellow-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-800 transition"
            >
              RSVP Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
