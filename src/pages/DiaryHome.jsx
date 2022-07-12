import { addDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DiaryCard from '../components/DiaryCard.jsx';
import Form from '../components/Form';
import MainHeader from '../components/MainHeader.jsx';
import Title from '../components/Title.jsx';
import colRef, { db, totalDiariesRef } from '../firebaseConfig';
import { diaryActions } from '../store/diary-slice';

const DiaryHome = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const totalDiaries = useSelector((state) => state.diary.totalDiaries);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardColor, setCardColour] = useState('');

  useEffect(() => {
    const unsubscribeDiaries = onSnapshot(colRef, (snapshots) => {
      let diaries = [];
      snapshots.docs.map((doc) =>
        diaries.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      dispatch(diaryActions.saveDiaries(diaries));
      diaries.length = 0;
    });

    const unsubscribeTotalDiaries = onSnapshot(totalDiariesRef, (snapshots) => {
      let totalDiaries;
      snapshots.docs.map((doc) => (totalDiaries = doc.data().totalDiaries));
      dispatch(diaryActions.saveTotalDiaries(totalDiaries));
    });

    return () => {
      unsubscribeDiaries();
      unsubscribeTotalDiaries();
    };
  }, [dispatch]);

  const titleInputHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const descriptionInputHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const cardColourInputHandler = (event) => {
    event.preventDefault();
    setCardColour(event.target.value);
  };

  const submitHandler = () => {
    if (title !== '' && description !== '') {
      addDoc(colRef, {
        name: params.name,
        title: title,
        description: description,
        cardColor: cardColor,
      });

      updateDoc(doc(db, 'totalDiaries', 'SEoX1XiXBAtlN8le3f3b'), {
        totalDiaries: parseInt(totalDiaries) + 1,
      });

      setTitle('');
      setDescription('');
      setCardColour('');
    }
    if (title === '') {
      console.log('Missing title');
    } else if (description === '') {
      console.log('Missing description');
    }
  };

  return (
    <>
      <MainHeader />
      <Title />
      <Form
        titleInputHandler={titleInputHandler}
        descriptionInputHandler={descriptionInputHandler}
        cardColourInputHandler={cardColourInputHandler}
        submitHandler={submitHandler}
        title={title}
        cardColor={cardColor}
        description={description}
      />
      <DiaryCard />
    </>
  );
};

export default DiaryHome;
