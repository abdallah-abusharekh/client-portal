import { Meeting } from "../types/meetings.types";
import Badge from "@/src/shared/components/Badge";
import Button from "@/src/shared/components/Button";
import Card from "@/src/shared/components/Card";

type Props = {
  meeting: Meeting;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  isPastMeeting?: boolean;
};

export default function MeetingDetails({
  meeting,
  onEdit,
  onDelete,
  isPastMeeting = false,
}: Props) {
  const startDate = new Date(meeting.start);
  const endDate = new Date(meeting.end);
  const hasValidDates =
    !Number.isNaN(startDate.getTime()) && !Number.isNaN(endDate.getTime());

  const now = new Date();
  const isOngoing = hasValidDates && now >= startDate && now <= endDate;
  const statusLabel = isPastMeeting
    ? "completed"
    : isOngoing
      ? "in-progress"
      : "todo";

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  const scheduleLabel = hasValidDates ? dateFormatter.format(startDate) : "-";
  const timeRangeLabel = hasValidDates
    ? `${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`
    : "-";

  const durationInMinutes = hasValidDates
    ? Math.max(0, Math.round((endDate.getTime() - startDate.getTime()) / 60000))
    : 0;

  const durationLabel =
    durationInMinutes >= 60
      ? `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}m`
      : `${durationInMinutes}m`;

  return (
    <div className="flex flex-col space-y-5 p-4 h-[90%]">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-start gap-3">
        <div>
          <h2 className="font-semibold text-gray-900 text-2xl leading-tight">
            {meeting.title}
          </h2>
        </div>
        <Badge value={statusLabel} />
      </div>

      <Card className="space-y-3 p-4 border border-gray-100">
        <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
          Description
        </h3>
        {meeting.description ? (
          <p className="text-gray-600 text-sm leading-6 whitespace-pre-wrap">
            {meeting.description}
          </p>
        ) : (
          <p className="text-gray-500 text-sm">No description provided.</p>
        )}
      </Card>

      <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        {meeting.link && (
          <Card className="space-y-2 p-4 border border-gray-100 h-full">
            <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
              Meeting Link
            </h3>
            {isPastMeeting ? (
              <p className="text-gray-500 text-sm">
                Meeting has ended, joining is disabled.
              </p>
            ) : (
              <a
                href={meeting.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block max-w-full text-primary text-sm hover:underline break-all"
              >
                {meeting.link}
              </a>
            )}
          </Card>
        )}

        <Card className="space-y-3 p-4 border border-gray-100 h-full">
          <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
            Schedule
          </h3>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                Date
              </p>
              <p className="mt-1 font-medium text-gray-800 text-sm">
                {scheduleLabel}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                Time
              </p>
              <p className="mt-1 font-medium text-gray-800 text-sm">
                {timeRangeLabel}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                Duration
              </p>
              <p className="mt-1 font-medium text-gray-800 text-sm">
                {durationLabel}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="space-y-3 p-4 border border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
            Participants
          </h3>
          <p className="text-gray-500 text-xs">
            {meeting.participants?.length ?? 0} attendee(s)
          </p>
        </div>

        {meeting.participants?.length ? (
          <ul className="space-y-2 h-40 overflow-auto">
            {meeting.participants.map((participant) => {
              const initials = participant.name
                .split(" ")
                .slice(0, 2)
                .map((value) => value.charAt(0).toUpperCase())
                .join("");

              return (
                <li
                  key={participant.id}
                  className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex justify-center items-center bg-primary/10 rounded-full w-9 h-9 font-semibold text-primary text-xs">
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-sm">
                      {participant.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {participant.jobTitle}
                    </p>
                    {participant.email && (
                      <a
                        href={`mailto:${participant.email}`}
                        className="inline-block mt-1 text-primary text-xs hover:underline"
                      >
                        {participant.email}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No participants added yet.</p>
        )}
      </Card>

      <div className="flex sm:flex-row flex-col gap-2 mt-auto pt-2">
        <Button
          onClick={() => onEdit?.(meeting.id)}
          disabled={isPastMeeting}
          variant="secondary"
          className="w-full"
        >
          Edit
        </Button>

        <Button
          onClick={() => onDelete?.(meeting.id)}
          disabled={isPastMeeting}
          className="bg-red-600 hover:bg-red-700 w-full"
        >
          Delete
        </Button>
      </div>

      {isPastMeeting && (
        <p className="text-gray-500 text-xs">
          This meeting is archived. Editing and deleting are disabled.
        </p>
      )}
    </div>
  );
}
