import React, { useState } from 'react'
import {
  Box,
  Button,
  ButtonWrap,
  Container,
  CreateBox,
  Input,
  Item,
  ItemFooterBtn,
  ItemFooterBtnWrap,
  ItemText,
  ItemTitle,
  Text,
  Title,
  TitleBox,
} from './style'

export default function Home () {

  const books = [
    {
      id: 1,
      title: "Raspberry Pi User Guide",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.",
      subText: "Eben Upton: 2012-year",
      subBtn: "211 pages",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Consequat nunc eu a lacus rhoncus mollis.",
      subText: "Eben Upton: 2012-year",
      subBtn: "1248 pages",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam auctor vitae morbi cursus id non. Cursus id semper ipsum nunc. Adipiscing massa ut morbi mattis proin. Mi id sit vulputate bibendum.",
      subText: "Eben Upton: 2012-year",
      subBtn: "587 pages",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur. Id suspendisse nascetur elit laoreet ornare augue interdum. Sociis mattis senectus vulputate nisi leo urna. Accumsan ornare consectetur semper convallis ultricies quam.",
      subText: "Eben Upton: 2012-year",
      subBtn: "140 pages",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur. Id suspendisse nascetur elit laoreet ornare augue interdum. Sociis mattis senectus vulputate nisi leo urna. Accumsan ornare consectetur semper convallis ultricies quam.",
      subText: "Eben Upton: 2012-year",
      subBtn: "159 pages",
    },
  ]

  const [count] = useState(books.length || 0);

  return <Container>
    <TitleBox>
      <Title>You’ve got <Title type='color'>{count} book</Title></Title>
      <CreateBox>
        <Input placeholder='Enter your name' />
        <ButtonWrap>
          <Button>+ Create a book</Button>
        </ButtonWrap>
      </CreateBox>
    </TitleBox>
    <Text>Your task today</Text>
    <Box>
      {
        books.map(({ id, title, description, subBtn, subText }) => {
          return <Item key={id}>
            <ItemTitle>{title}</ItemTitle>
            <ItemText>{description}</ItemText>
            <TitleBox>
              <ItemText>{subText}</ItemText>
              <ItemFooterBtnWrap>
                <ItemFooterBtn>{subBtn}</ItemFooterBtn>
              </ItemFooterBtnWrap>
            </TitleBox>
          </Item>
        })
      }
    </Box>
  </Container>
}
