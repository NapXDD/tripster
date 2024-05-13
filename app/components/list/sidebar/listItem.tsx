import React from "react";

export default function ListItem({
  children,
  data,
  id,
}: {
  children?: React.ReactNode;
  data?: string[];
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      {data ? (
        data.map((item, index) => (
          <React.Fragment key={item + index}>
            <a
              href={`#${id}${index}`}
              className="text-gray-400 font-normal hover:text-gray-700 duration-100"
            >
              {item}
            </a>
          </React.Fragment>
        ))
      ) : (
        <div className="text-gray-400 font-normal hover:text-gray-700 duration-100 mt-5">
          {children}
        </div>
      )}
    </div>
  );
}
