// Omit
interface Address {
    street: string,
    num: number,
    city: string,
    country: string
}

interface Person {
    name: string,
    age: number,
    address: Omit<Address, 'city' | 'country'>
}

const user: Person = {
    name: 'Gabriel',
    age: 17,
    address: {
        street: 'Rua ABC',
        num: 12
    }
}

// Pick
interface Book {
    title: string,
	category: string,
    author: string,
    year: number
}

type FavoriteBooks = Pick<Book, 'title' | 'author'>[]

const favBooks: FavoriteBooks = []
favBooks.push({ title: 'Advenced HTML', author: 'Tim Berners-Lee' })