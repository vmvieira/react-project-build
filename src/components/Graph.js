import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";

const Graph = ({ graph, loading }) => {
  useEffect(() => {
    console.log(graph);
    console.log(
      Object.keys(graph)

        .map((eachValue) => eachValue.slice(5, 10))
        .map((slicedValue) => slicedValue.split("-").reverse().join("/"))
    );
    console.log(Object.keys(graph));
  }, [graph]);

  if (loading.GraphLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className="p-4">
      <table className="text-left w-full bg-gray-100">
        <thead className="bg-navy-blue flex text-white w-full rounded-t-lg h-12">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4 whitespace-nowrap font-light">
              Indicador de acessos
            </th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4"></th>
            <th className="p-4 w-1/4 text-right"></th>
          </tr>
        </thead>

        <tfoot className="max-h-96">
          <Line
            data={{
              labels: Object.keys(graph)

                .map((eachValue) => eachValue.slice(5, 10))
                .map((slicedValue) =>
                  slicedValue.split("-").reverse().join("/")
                ),
              datasets: [
                {
                  label: "Qtd.",
                  data: Object.values(graph).map(
                    (eachValue) => eachValue.length
                  ),
                  backgroundColor: "rgb(102,205,205, 0.8)",
                  borderColor: "#143047",
                  borderWidth: 4,
                  borderJoinStyle: "bevel",
                  borderCapStyle: "square",
                  lineTension: 0,
                  pointBorderWidth: 2,
                  pointRadius: 7,
                  pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              ],
            }}
            height={368}
            width={880}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
            plugins={[
              {
                afterDatasetsDraw: function (chart) {
                  var ctx = chart.ctx;
                  chart.data.datasets.forEach(function (dataset, index) {
                    var datasetMeta = chart.getDatasetMeta(index);
                    if (datasetMeta.hidden) return;
                    datasetMeta.data.forEach(function (point, index) {
                      var value = dataset.data[index],
                        x = point.getCenterPoint().x,
                        y = point.getCenterPoint().y,
                        radius = point._model.radius,
                        fontSize = 10,
                        fontFamily = "Verdana",
                        fontColor = "rgb(20, 48, 71)",
                        fontStyle = "bold";
                      ctx.save();
                      ctx.textBaseline = "middle";
                      ctx.textAlign = "center";
                      ctx.font =
                        fontStyle + " " + fontSize + "px" + " " + fontFamily;
                      ctx.fillStyle = fontColor;
                      ctx.fillText(value, x, y - radius - fontSize);
                      ctx.restore();
                    });
                  });
                },
              },
            ]}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default Graph;
