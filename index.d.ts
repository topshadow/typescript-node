interface Action {
    /**
     * http操作对应的行为
     * 例如 localhost:3000/doctor/login
     * 对应 toString(){
     * return 'doctor';
     * }的对象
     * 
     * @returns {string}
     * 
     * @memberOf Action
     */
    toString(): string;
}