const INITIAL_STATE = {
  booksArray: [
    {
      id: 1,
      name: "The Abay's path",
      author: "Mukhtar Auezov",
      genre: "Classic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 2,
      name: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Detective",
      publishedYear: "1887",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 3,
      name: "The richest man in Babylon",
      author: "George Clayson",
      genre: "History",
      publishedYear: "1926",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 4,
      name: "Spaceboy",
      author: "David Williams",
      genre: "Story",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 2,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 5,
      name: "Harry Potter",
      author: "Joanne Rowling",
      genre: "Fantastic",
      publishedYear: "1997",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 6,
      name: "War and Peace",
      author: "Lev Tolstoy",
      genre: "Classic",
      publishedYear: "1865",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 7,
      name: "Murder on the Orient Express",
      author: "Agatha Christie",
      genre: "Detective",
      publishedYear: "1934",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 8,
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      publishedYear: "2011",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 9,
      name: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      genre: "Story",
      publishedYear: "1943",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 10,
      name: "The Call of Cthulhu",
      author: "Howard Phillips Lovecraft",
      genre: "Fantastic",
      publishedYear: "1928",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 11,
      name: "Idiot",
      author: "Fedor Dostoevsky",
      genre: "Classic",
      publishedYear: "1869",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 12,
      name: "The Silence Of The Lambs",
      author: "Tomas Harris",
      genre: "Detective",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
  ],
  mybooksArray: [],
  allBooksArray: [
    {
      id: 1,
      name: "The Abay's path",
      author: "Mukhtar Auezov",
      genre: "Classic",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 2,
      name: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Detective",
      publishedYear: "1887",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 3,
      name: "The richest man in Babylon",
      author: "George Clayson",
      genre: "History",
      publishedYear: "1926",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 5,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 4,
      name: "Spaceboy",
      author: "David Williams",
      genre: "Story",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 2,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 5,
      name: "Harry Potter",
      author: "Joanne Rowling",
      genre: "Fantastic",
      publishedYear: "1997",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 6,
      name: "War and Peace",
      author: "Lev Tolstoy",
      genre: "Classic",
      publishedYear: "1865",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 7,
      name: "Murder on the Orient Express",
      author: "Agatha Christie",
      genre: "Detective",
      publishedYear: "1934",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 8,
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      publishedYear: "2011",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 9,
      name: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      genre: "Story",
      publishedYear: "1943",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 10,
      name: "The Call of Cthulhu",
      author: "Howard Phillips Lovecraft",
      genre: "Fantastic",
      publishedYear: "1928",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 11,
      name: "Idiot",
      author: "Fedor Dostoevsky",
      genre: "Classic",
      publishedYear: "1869",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 3,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 12,
      name: "The Silence Of The Lambs",
      author: "Tomas Harris",
      genre: "Detective",
      publishedYear: "1942",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 4,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 13,
      name: "The Little Prince",
      author: "Antoine de Saint-Exupery",
      genre: "Story",
      publishedYear: "1943",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 14,
      name: "The Dark Tower",
      author: "Steven King",
      genre: "Fantastic",
      publishedYear: "1998",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 15,
      name: "Taras Bulba",
      author: "Nicolas Gogol",
      genre: "Classic",
      publishedYear: "1835",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 16,
      name: "Robinson Crusoe",
      author: "Daniel Defoe",
      genre: "Story",
      publishedYear: "1719",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
    {
      id: 17,
      name: "The Witcher",
      author: "Andrzej Sapkowski",
      genre: "Fantastic",
      publishedYear: "1835",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
      viewCount: 0,
      avgRating: 1,
      grades: [],
      reviews: [
        {
          author: "Author 1",
          text: "Text 1",
        },
        {
          author: "Author 2",
          text: "Text 2",
        },
        {
          author: "Author 3",
          text: "Text 3",
        },
      ],
    },
  ],
  friendsArray: [
    {
      id: 1,
      name: "Dias Kopesh",
      age: 20,
      img: "Dias",
      books: [
        {
          id: 13,
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          genre: "Story",
          publishedYear: "1943",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 14,
          name: "The Dark Tower",
          author: "Steven King",
          genre: "Fantastic",
          publishedYear: "1998",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 15,
          name: "Taras Bulba",
          author: "Nicolas Gogol",
          genre: "Classic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 16,
          name: "Robinson Crusoe",
          author: "Daniel Defoe",
          genre: "Story",
          publishedYear: "1719",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 17,
          name: "The Witcher",
          author: "Andrzej Sapkowski",
          genre: "Fantastic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Denis Odnourov",
      age: 20,
      img: "Denis",
      books: [
        {
          id: 13,
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          genre: "Story",
          publishedYear: "1943",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 14,
          name: "The Dark Tower",
          author: "Steven King",
          genre: "Fantastic",
          publishedYear: "1998",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 15,
          name: "Taras Bulba",
          author: "Nicolas Gogol",
          genre: "Classic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 16,
          name: "Robinson Crusoe",
          author: "Daniel Defoe",
          genre: "Story",
          publishedYear: "1719",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 17,
          name: "The Witcher",
          author: "Andrzej Sapkowski",
          genre: "Fantastic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Miras Sagyndyk",
      age: 21,
      img: "Miras",
      books: [
        {
          id: 13,
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          genre: "Story",
          publishedYear: "1943",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 14,
          name: "The Dark Tower",
          author: "Steven King",
          genre: "Fantastic",
          publishedYear: "1998",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 15,
          name: "Taras Bulba",
          author: "Nicolas Gogol",
          genre: "Classic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 16,
          name: "Robinson Crusoe",
          author: "Daniel Defoe",
          genre: "Story",
          publishedYear: "1719",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 17,
          name: "The Witcher",
          author: "Andrzej Sapkowski",
          genre: "Fantastic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Tamerlan Seylov",
      age: 20,
      img: "Tamer",
      books: [
        {
          id: 13,
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          genre: "Story",
          publishedYear: "1943",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 14,
          name: "The Dark Tower",
          author: "Steven King",
          genre: "Fantastic",
          publishedYear: "1998",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 15,
          name: "Taras Bulba",
          author: "Nicolas Gogol",
          genre: "Classic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 16,
          name: "Robinson Crusoe",
          author: "Daniel Defoe",
          genre: "Story",
          publishedYear: "1719",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 17,
          name: "The Witcher",
          author: "Andrzej Sapkowski",
          genre: "Fantastic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Yerassyl Bazekesh",
      age: 21,
      img: "Yerassyl",
      books: [
        {
          id: 13,
          name: "The Little Prince",
          author: "Antoine de Saint-Exupery",
          genre: "Story",
          publishedYear: "1943",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 14,
          name: "The Dark Tower",
          author: "Steven King",
          genre: "Fantastic",
          publishedYear: "1998",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 15,
          name: "Taras Bulba",
          author: "Nicolas Gogol",
          genre: "Classic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 16,
          name: "Robinson Crusoe",
          author: "Daniel Defoe",
          genre: "Story",
          publishedYear: "1719",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
        {
          id: 17,
          name: "The Witcher",
          author: "Andrzej Sapkowski",
          genre: "Fantastic",
          publishedYear: "1835",
          text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione minus eius suscipit.",
          viewCount: 0,
          avgRating: 1,
          grades: [],
          reviews: [
            {
              author: "Author 1",
              text: "Text 1",
            },
            {
              author: "Author 2",
              text: "Text 2",
            },
            {
              author: "Author 3",
              text: "Text 3",
            },
          ],
        },
      ],
    },
  ],
};

export const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "APPEND_BOOK":
      return {
        ...state,
        booksArray: [...state.booksArray, action.payload.data],
      };

    case "ADD_MY_BOOK":
      return {
        ...state,
        mybooksArray: [...state.mybooksArray, action.payload.data],
      };
    case "ADD_TO_ALL_BOOK":
      return {
        ...state,
        allBooksArray: [...state.allBooksArray, action.payload.data],
      };
    case "DELETE_BOOK":
      console.log(action.payload.data);
      return {
        ...state,
        booksArray: state.booksArray.filter(
          (book) => book.id !== action.payload.data.id
        ),
      };
    case "DELETE_MY_BOOK":
      console.log(action.payload.data);
      return {
        ...state,
        mybooksArray: state.mybooksArray.filter(
          (book) => book.id !== action.payload.data.id
        ),
      };
    case "DELETE_FRIEND_BOOK":
      //console.log(action.payload.data);
      //console.log(state.friendsArray[action.payload.data.friendID - 1].books);
      const newArr = state.friendsArray[
        action.payload.data.friendID - 1
      ].books.filter((book) => book.id !== action.payload.data.id);
      console.log(newArr);
      state.friendsArray[action.payload.data.friendID - 1].books = newArr;
      console.log(state.friendsArray);
      return {
        ...state,
        friendsArray: state.friendsArray,
      };
    case "UPDATE_NAME": {
      const index = action.payload.data.id;
      const newArray = [...state.allBooksArray];
      newArray[index].name = action.payload.data.name;
      newArray[index].author = action.payload.data.author;
      newArray[index].genre = action.payload.data.genre;
      newArray[index].publishedYear = action.payload.data.publishedYear;
      newArray[index].text = action.payload.data.text;
      return {
        ...state,
        allBooksArray: newArray,
      };
    }
    case "UPDATE_AVG_RATING": {
      const index = action.payload.data.id;
      const newArray = [...state.allBooksArray];
      newArray[index].avgRating = action.payload.data.avgRating;
      return {
        ...state,
        allBooksArray: newArray,
      };
    }
    case "ADD_REVIEW": {
      console.log(action.payload.data);
      const index = action.payload.data.id;
      const newArray = [...state.allBooksArray];
      newArray[index].reviews.push({
        author: action.payload.data.author,
        text: action.payload.data.text,
      });
    }
    case "ADD_RATE": {
      console.log(action.payload.data);
      const index = action.payload.data.id;
      const newArray = [...state.allBooksArray];
      newArray[index].grades.push(action.payload.data.rating);
    }
    default:
      return state;
  }
};
