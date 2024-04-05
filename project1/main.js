const Api = (() => {
    // fetch data from server
    const url = 'http://localhost:4232/courseList';
    const getData = fetch(url).then((res) => res.json());
    return {
        getData
    }
})();

const View = (() => {
    const domCourse = {
        availablecontainer: '.availablecourses',
        selectedcontainer: '.selectedcourses',
        totalCredits: '.totalcredits',
        selectBtn: '.selectbtn'
    }

    const createTmp = (arr) => {
        let tmp = '';
        arr.forEach(course => {
            const courseType = course.required == true ? "Compulsory" : "Elective";
            tmp += `<div class="course">
                <ul class="coursetitle">${course.courseName}</ul>
                <ul class="coursetype">Course Type: ${courseType}</ul>
                <ul class="coursecredit">Course Credit: ${course.credit}</ul>
            </div>`

        })
        return tmp;
    }

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    }

    const renderCredits = (ele, credits) => {
        ele.innerHTML = `Total Credits: ${credits}`;
    }

    return {
        domCourse,
        createTmp,
        render,
        renderCredits
    }
})();

const Model = ((view, api) => {

    const { getData } = api;

    const {domCourse, createTmp, render} = view;

    class State {
        constructor() {
            this._courseList = [];
        }
        get getCourseList() {
            return this._courseList;
        }
        set availableCourseList(arr) {
            this._courseList = arr;
            const courseContainer = document.querySelector(domCourse.availablecontainer);
            const tmp = createTmp(this._courseList);
            render(courseContainer, tmp);
        }
        set selectedCourseList(arr) {
            this._courseList = arr;
            const courseContainer = document.querySelector(domCourse.selectedcontainer);
            const tmp = createTmp(this._courseList);
            render(courseContainer, tmp);
        }
    }
    return {
        getData,
        State
    }

})(View, Api);

const Controller = ((view, model) => {
    const { State, getData } = model;
    const { domCourse, renderCredits } = view;
    const btn = document.querySelector(domCourse.selectBtn);

    let credits = 0;
    const courseContainer = document.querySelector(domCourse.totalCredits);
    renderCredits(courseContainer, credits);

    let availableCourseList = [];
    const state = new State();
    getData.then((data) => {
        state.availableCourseList = data;
        availableCourseList = [...data];
    });

    const courseList = {};
    const selectCourse = () => {
        const availableCourses = document.querySelector('.availablecourses');
        availableCourses.addEventListener('click', (event) => {
            const chosenCourse = event.target.closest('.course');
            if (chosenCourse && btn.disabled == false) {
                const courseName = chosenCourse.querySelector('.coursetitle').textContent.trim();
                const courseType = chosenCourse.querySelector('.coursetype').textContent.split(':')[1].trim();
                const courseCredit = chosenCourse.querySelector('.coursecredit').textContent.split(':')[1].trim();
                if (chosenCourse.classList.contains('selected')) {
                    chosenCourse.classList.remove('selected');
                    credits -= courseList[courseName].credit;
                    delete courseList[courseName];
                } else if (credits + parseInt(courseCredit) > 18) {
                    alert('You can only choose up to 18 credits in one semester')
                } else {
                    chosenCourse.classList.add('selected');
                    courseList[courseName] = {courseName: courseName, type: courseType, credit: parseInt(courseCredit) };
                    credits += courseList[courseName].credit;
                }
                renderCredits(courseContainer, credits);
            }
        });
    }

    const confirmSelection = () => {
        btn.addEventListener("click", () => {
            const confirmation = confirm(`You have chosen ${credits} credits for this semester. You cannot change once you submit. Do you want to confirm?`);
            if (confirmation) {
                state.selectedCourseList = Object.values(courseList);
                availableCourseList = availableCourseList.filter(course => !courseList[course.courseName]);
                state.availableCourseList = availableCourseList;
                btn.disabled = true;
            } else {
                console.log("User clicked Cancel");
            }
        });
    }




    const bootstrap = () => {
        selectCourse();
        confirmSelection();
    }

    return {
        bootstrap
    }


})(View, Model);

Controller.bootstrap();