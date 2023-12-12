import { FunctionComponent, HTMLAttributes, ReactElement } from "react";
import { format } from "date-fns";
import cx from "classnames";
import { FormattedMessage } from "react-intl";

type TimelineItemProps = HTMLAttributes<
  HTMLTableRowElement | HTMLDivElement
> & {
  start?: Date;
  end?: Date;
  stillWorking?: boolean;
};

export const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  start,
  end,
  stillWorking = false,
  children,
  ...props
}) => {
  function renderTime(): ReactElement {
    return (
      <div className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
        {start && format(start, "MMM yyyy")} -{" "}
        {stillWorking ? (
          <FormattedMessage id="present" />
        ) : (
          end && format(end, "MMM yyyy")
        )}
      </div>
    );
  }

  return (
    <>
      <tr
        {...{
          ...props,
          className: cx(
            "relative hover:cursor-pointer z-30 hidden lg:table-row",
            props.className
          ),
        }}
      >
        <div
          className={cx(
            "shadow absolute rounded-xl -left-4 top-8 -z-10 transition-colors bg-slate-500 bg-opacity-10 dark:bg-slate-400 dark:bg-opacity-10"
          )}
          style={{ height: 'calc(100% - 60px)', width: 'calc(100% + 40px)'}}
        />
        <td className="py-6 flex w-36">{renderTime()}</td>
        <td className="p-4">
          <div className="flex-1 flex flex-col gap-2">{children}</div>
        </td>
      </tr>

      <div
        {...{
          ...props,
          className: cx(
            "relative hover:cursor-pointer z-30 flex flex-col gap-4 lg:hidden",
            props.className
          ),
        }}
      >
        <div
          className={cx(
            "shadow absolute rounded-xl -left-2 top-2 -z-10 transition-colors bg-slate-500 bg-opacity-10 dark:bg-slate-400 dark:bg-opacity-10"
          )}
          style={{ height: 'calc(100% - 20px)', width: 'calc(100% + 20px)'}}
        />
        {renderTime()}
        <div className="flex-1 flex flex-col gap-2 md:px-2">{children}</div>
      </div>
    </>
  );
};

type TimelineProps = HTMLAttributes<HTMLTableElement | HTMLDivElement> & {
  children:
    | ReactElement<typeof TimelineItem>
    | ReactElement<typeof TimelineItem>[];
};

export const Timeline: FunctionComponent<TimelineProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <table {...{...props, className: cx("hidden lg:table", props.className)}}>
        <tbody>{children}</tbody>
      </table>

      <div {...{...props, className: cx("flex flex-col w-full gap-8 lg:hidden", props.className)}}>
        {children}
      </div>
    </>
  );
};
