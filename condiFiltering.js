let ageGroup = [
    Asma= "14",
    Rabia = "20",
    Rohma = "22",
    Aeerba = "18",
    Samia = "17"
]
let ageDetail = ageGroup.filter((age) => {
    return (age >= 18)
}
)
console.log(ageDetail);