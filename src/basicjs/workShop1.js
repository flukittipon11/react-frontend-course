function SortNumber() {
    let dataArray = [22, 19, 2, 89, 77, 39, 59];

    // เรียงลำดับอาร์เรย์
    dataArray.sort((a, b) => a - b);

    return (
        <div>
            {dataArray.join(' ')} {/* ใช้ช่องว่างเป็นตัวแบ่ง */}
        </div>
    );
}

export default SortNumber