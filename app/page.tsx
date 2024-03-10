import Image from "next/image";
import RotatedColumn from "./RotatedColumn";
import { NAWAFIL, PRAYERS_TIMES } from "@/data";

export default function Home() {
  return (
    <div className="table-container">
      <table className="ramadan-table border-collapse w-full">
        <thead>
          <tr>
            <th rowSpan={2}>Day</th>
            <th colSpan={2}>الصلاة</th>
            <th>الأذكار</th>
            <th>قران</th>
            <th>أعمال صالحة</th>
          </tr>
          <tr>
            <th>
              الفروض
              <RotatedColumn data={PRAYERS_TIMES} />
            </th>
            <th>
              النوافل
              <RotatedColumn data={NAWAFIL} />
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 رمضان</td>
            <td>فجر - ظهر - عصر - مغرب - عشاء</td>
            <td>السنن الرواتب - الضحى - قيام الليل</td>
            <td>ذكر الله</td>
            <td>سورة البقرة</td>
            <td>صدقة</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
