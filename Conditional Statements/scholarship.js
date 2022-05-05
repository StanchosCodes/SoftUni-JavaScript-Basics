function scholarship(arg1, arg2, arg3) {

    let incomeInLv = Number(arg1);
    let averageGrade = Number(arg2);
    let minSalary = Number(arg3);
    let socialScholarshipMoney = 0;
    let gradeScholarshipMoney = 0;

    let isSocialScholarship = false;
    let isScholarship = false;

    if (incomeInLv < minSalary) {
        isSocialScholarship = true;
        isScholarship = true;
    }
    if (averageGrade < 4.5) {
        isSocialScholarship = false;
        isScholarship = false;
    }
    if (isSocialScholarship) {
        socialScholarshipMoney = Math.floor(minSalary * 0.35);
    }
    if (averageGrade >= 5.50) {
        gradeScholarshipMoney = Math.floor(averageGrade * 25);
        isScholarship = true;
    }
    if (!isScholarship) {
        console.log("You cannot get a scholarship!")
    }
    else if (gradeScholarshipMoney >= socialScholarshipMoney) {
        console.log(`You get a scholarship for exellent results ${gradeScholarshipMoney} BGN`)
    }
    else if (socialScholarshipMoney > gradeScholarshipMoney) {
        console.log(`You get a Social scholarship ${socialScholarshipMoney} BGN`)
    }

}

scholarship("300.00", "5.65", "420.00");