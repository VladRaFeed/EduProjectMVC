const { MarksListModel } = require("../Models/MarksListModel");

// Отримати всі журнали
const fetchMarksLists = async (req, res) => {
    try {
        const marksLists = await MarksListModel.find({});
        res.status(200).json(marksLists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Сталася помилка при отриманні журналів." });
    }
};

// Створити новий журнал
const createMarksList = async (req, res) => {
    const data = req.body;
    try {
        const newMarksList = {
            GroupName: data.GroupName,
            StudentsList: data.StudentsList,
            SubjectsList: data.SubjectsList,
            Teacher: data.Teacher,
            Marks: data.Marks,
        };
        const createdMarksList = await MarksListModel.create(newMarksList);

        res.status(201).json({
            code: 201,
            status: "created",
            data: createdMarksList,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Не вдалося створити журнал." });
    }
};

// Оновити журнал за ID
const updateMarksList = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const updatedMarksList = await MarksListModel.findByIdAndUpdate(
            id,
            updatedData,
            { new: true } // повернути оновлений документ
        );

        if (updatedMarksList) {
            res.status(200).json({
                code: 200,
                status: "updated",
                data: updatedMarksList,
            });
        } else {
            res.status(404).json({ message: "Журнал не знайдено!" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Сталася помилка при оновленні журналу." });
    }
};

// Видалити журнал за ID
const deleteMarksList = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedMarksList = await MarksListModel.findByIdAndDelete(id);

        if (deletedMarksList) {
            res.status(200).json({
                code: 200,
                status: "deleted",
            });
        } else {
            res.status(404).json({ message: "Журнал не знайдено!" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Сталася помилка при видаленні журналу." });
    }
};

// Знайти журнал за назвою групи
const searchMarksListByGroupName = async (req, res) => {
    const groupName = req.params.groupName; // Отримуємо назву групи
    try {
        const marksList = await MarksListModel.findOne({ GroupName: groupName }); // Прямий пошук за GroupName

        if (marksList) {
            res.status(200).json({
                code: 200,
                status: "found",
                data: marksList,
            });
        } else {
            res.status(404).json({ message: "Журнал не знайдено!" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Сталася помилка під час пошуку журналу." });
    }
};

module.exports = {
    fetchMarksLists,
    createMarksList,
    updateMarksList,
    deleteMarksList,
    searchMarksListByGroupName,
};
