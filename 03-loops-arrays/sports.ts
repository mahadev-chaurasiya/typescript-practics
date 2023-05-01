let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let i = 0; i < sportsOne.length; i++) {
  console.log(sportsOne[i]);
}
for (let tempsSport of sportsOne) {
  if (tempsSport == "Cricket") {
    console.log(tempsSport + " <This is my fevorit sports>");
  } else {
    console.log(tempsSport);
  }
}
