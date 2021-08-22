import React from 'react';
import DiaryCard from "./DiaryCard";
import Container from '@material-ui/core/Container';

function DiaryCardContainer({tempData}) {
    return (
        <Container>
            { tempData.map((data) => {
                return <DiaryCard
                    key={data.title}
                    title={data.title}
                    subtitle='Noah'
                    description={data.description}
                />
            }) }
        </Container>
    );
}

export default DiaryCardContainer;