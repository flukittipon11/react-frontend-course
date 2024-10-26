function CalculateGrade(score) {
    if (score >= 80 && score <= 100) {
        return "เกรดที่ได้ : 4.0";
    } else if (score >= 75 && score < 80) {
        return "เกรดที่ได้ : 3.5";
    } else if (score >= 70 && score < 75) {
        return "เกรดที่ได้ : 3.0";
    } else if (score >= 65 && score < 70) {
        return "เกรดที่ได้ : 2.5";
    } else if (score >= 60 && score < 65) {
        return "เกรดที่ได้ : 2.0";
    } else if (score >= 55 && score < 60) {
        return "เกรดที่ได้ : 1.5";
    } else if (score >= 50 && score < 55) {
        return "เกรดที่ได้ : 1.0";
    } else if (score >= 0 && score < 50) {
        return "เกรดที่ได้ : 0.0";
    } else {
        return "คะแนนไม่ถูกต้อง";
    }
}

export default CalculateGrade