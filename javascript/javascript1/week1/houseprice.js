const housePrice = [2500000, 1000000];
const volumeInMeters = [[8*10*10], [5*11*8]];
const gardenSizeInM2 = [100, 72];

PetersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
console.log(`The peters house cost ${PetersHousePrice} but he is paying ${housePrice[0]}, means ${housePrice[0] - PetersHousePrice} over market rate`);


JuliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
console.log(`The Julia house cost ${JuliaHousePrice} but she is paying ${housePrice[1]}, means ${housePrice[1] - JuliaHousePrice} less than market rate`);



