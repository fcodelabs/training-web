import React, {useContext} from 'react';
import DiaryCard from "./DiaryCard";
import {Context} from "../App";
import Container from '@material-ui/core/Container';
import Masonry from 'react-masonry-css'

function DiaryCardContainer() {
    //context
    const context = useContext(Context);

    //breakpoints for masonry
    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { context[0] !== undefined && context[2].map((data) => {
                    return <DiaryCard
                        key={data.title}
                        title={data.title}
                        subtitle='Noah'
                        description={data.description}
                    />
                }) }
            </Masonry>
        </Container>
    );
}

export default DiaryCardContainer;