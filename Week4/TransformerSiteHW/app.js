const toggleCourse = (id) => {
    let course = document.querySelector('#course-'+id)
    course.classList.toggle('course-large')
    let courseLeft = document.querySelector('#hidden-course-'+id)
    courseLeft.classList.toggle('course-right')
}

