export const pricesPerUser = [
  { name: "base", value: 18 },
  { name: "baseAnnual10%Off", value: 194.4 },
  { name: "premium", value: 23 },
  { name: "premiumAnnual13%Off", value: 240 },
  { name: "ultimate", value: 29 },
  { name: "ultimateAnnual15%Off", value: 295.2 },
];
export const selectedPrice = (selectedPackage) =>
  pricesPerUser.find(({ name }) => name === selectedPackage);

export const calculateSMSPackagePrice = (packageNumber) => {
  return Math.ceil(packageNumber / 20);
};
