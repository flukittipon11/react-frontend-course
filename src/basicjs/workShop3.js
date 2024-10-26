function EvenOdd(n) {
    let r = "";
    if ((n % 2) === 0) {
        r = "เลข " + n + " เป็นเลขคู่";
    } else {
        r = "เลข " + n + " เป็นเลขคี่";
    }
    return r;
}

export default EvenOdd