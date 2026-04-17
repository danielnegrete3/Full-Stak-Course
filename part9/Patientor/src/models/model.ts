
export class Model<T>{
    protected items:T[] = [];

    async add(item:T){
        this.items.push(item);
    }

    async get():Promise<T[]>
    {
        return this.items;
    }
}