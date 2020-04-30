export var data = {
    fuelType: 0,
    burnType: 0,

    vehicleOption: "",

    sedanCostPerOneThousand: 0,
    sedanBurnPerOneThousand: 0,

    SUVCostPerOneThousand: 0,
    SUVBurnPerOneThousand: 0,

    motorcycleCostPerOneThousand: 0,
    motorcycleBurnPerOneThousand: 0,

    sedanTotalCost: 0,
    sedanTotalBurn: 0,

    SUVTotalCost: 0,
    SUVTotalBurn: 0,

    motorcycleTotalCost: 0,
    motorcycleTotalBurn: 0,

    input_value:0,
}

export function ChangeData(d) {
    // sessionStorage.setItem("data", JSON.stringify(data));
    data = d;
}