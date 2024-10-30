import React from "react";

const CourseDescription = () => {
	const navigate = () => {
		window.open("https://github.com/flukittipon11/react-frontend-course");
	};
	return (
		<div className="course-description">
			<div className="course-content">
				<span className="course-title">หลักสูตรการสอน React JavaScript</span>
				<span className="course-text">
					หลักสูตรนี้ออกแบบมาเพื่อให้ผู้เรียนได้เรียนรู้และเข้าใจการพัฒนา Front-End Web Application โดยใช้
					React JavaScript ซึ่งเป็นหนึ่งในเทคโนโลยีที่ได้รับความนิยมสูงสุดในปัจจุบัน
					หลักสูตรนี้อยู่ภายใต้โครงการ
				</span>
				<span className="course-text">
					ดาวน์โหลดไฟล์เตรียมความพร้อม: เพื่อความสะดวกในการเรียนรู้และการฝึกปฏิบัติ ผู้เรียนสามารถ
					ดาวน์โหลดไฟล์สำหรับเตรียมความพร้อม เพื่อใช้ใน Workshop 2 ได้ที่
				</span>
				<div className="download-link" onClick={navigate}>
					เอกสารประกอบการสอน
				</div>
			</div>
		</div>
	);
};

export default CourseDescription;
