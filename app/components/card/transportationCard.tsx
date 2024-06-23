import PlanningDetailContentLayout from "../layout/planningDetailContentLayout";
import {
  generateUrlCoach,
  generateUrlFlight,
} from "@/utils/function/generateURL";
import { PlanDetailEntity, plan } from "@/utils/entities/plan";
import { transport } from "@/app/types/transportation";

//a lots of if else statement here because backend sending two difference data interface
export default function TransportationCard({
  data,
}: {
  data?: PlanDetailEntity | transport;
}) {
  return (
    <PlanningDetailContentLayout>
      <div className="h-auto pb-8" id="transportation">
        <div className="title">
          <div className="pt-8 text-2xl">Phương tiện</div>
          <div className="flex flex-col">
            {data === undefined ? null : "transport" in data ? (
              data.transport[0].type === "flight" ? (
                <div className="flex flex-col">
                  <div>Tên hãng: {data.transport[0].name}</div>
                  <div>
                    Tham khảo tại:{" "}
                    <a
                      className="text-blue-600 font-light"
                      href={generateUrlFlight(
                        data.plan.start_point,
                        data.plan.end_point,
                        data.transport[0].start_time!
                      )}
                    >
                      {generateUrlFlight(
                        data.plan.start_point,
                        data.plan.end_point,
                        data.transport[0].start_time!
                      )}
                    </a>
                  </div>
                  <div>Thời gian khởi hành: {data.transport[0].start_time}</div>
                  <div>Thời gian hạ cánh: {data.transport[0].end_time}</div>
                </div>
              ) : data.transport[0].type === "coach" ? (
                <div className="flex flex-col">
                  <div>
                    Tham khảo tại:{" "}
                    <a
                      href={generateUrlCoach(
                        data.plan.start_point,
                        data.plan.end_point,
                        data.plan.start_day
                      )}
                    >
                      {generateUrlCoach(
                        data.plan.start_point,
                        data.plan.end_point,
                        data.plan.start_day
                      )}
                    </a>
                  </div>
                  <div>Tên xe: {data.transport[0].name}</div>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            {data === undefined ? null : "flights" in data ? (
              <div className="flex flex-col">
                <div>Tên hãng: {data.flights[0].airline}</div>
                <div>Giá tiền: {data.price}</div>
                <div>Tổng thời gian: {data.total_duration}</div>
              </div>
            ) : "name" in data ? (
              <div className="flex flex-col">
                <div>Tên xe: {data.name}</div>
                <div>Giá tiền: {data.price}</div>
                <div>Tổng thời gian: {data.duration}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </PlanningDetailContentLayout>
  );
}
