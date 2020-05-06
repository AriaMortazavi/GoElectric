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

    input_value:0,

    gas:0,
    carbon:0,
}

export function ChangeData(d) {
    // sessionStorage.setItem("data", JSON.stringify(data));
    data = d;
}