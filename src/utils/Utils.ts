class Utils {
  static getAge(dateOfBirth: string): number {
    const birthYear: number = new Date(dateOfBirth).getFullYear();
    const currentYear: number = new Date().getFullYear();

    return currentYear - birthYear;
  }
}

export {Utils};
