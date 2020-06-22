
import React from 'react';
import shortid from 'shortid';
import Video from './Video';
import Article from './Article';
import WithHighlight from './WithHighlight';

const VideoHighlighted = WithHighlight(Video);
const ArticleHighlighted = WithHighlight(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return <VideoHighlighted {...item} key={shortid.generate()} />;

            case 'article':
                return <ArticleHighlighted {...item} key={shortid.generate()} />;
        }
    });
}
