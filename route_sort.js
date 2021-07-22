// Сортировка по цене
//
let fromLower = true;

const sortListDir = () => {

  const list = document.getElementById("id01");

  // В list лежат div и script -> отбираем массив исключительно из div, отбросив скрипт
  //
  const trips = [];
  [...list.children].forEach(trip => trip.tagName !== "SCRIPT" ? trips.push(trip) : null);

  const sortFromLow = () => {

    // Сортируем элементы по цене поездки в отдельном массиве, полученном выше
    //
    const sortedTrips = trips.sort((a, b) => {

      // Выделяем в элементе-поездке под-элемент с ценой и тасуем массив по этим ценам
      const curr = +a.getElementsByClassName("single_trip_price")[0].innerText;
      const next = +b.getElementsByClassName("single_trip_price")[0].innerText;

      if (curr > next) {
        return 1;
      };
      if (curr < next) {
        return -1;
      };
      return 0;
    });

    // Скрипт проверяет, по алвавиту ли ему сортировать -> следующий вызов скрипта будет в обратном порядке
    fromLower = false;

    // Крепим каждый елемент отсортированного массива обратно к списку направлений, но в нужном порядке
    //
    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  const sortFromHigh = () => {
    const sortedTrips = trips.sort((a, b) => {

      const curr = +a.getElementsByClassName("single_trip_price")[0].innerText;
      const next = +b.getElementsByClassName("single_trip_price")[0].innerText;

      if (next > curr) {
        return 1;
      };
      if (next < curr) {
        return -1;
      };
      return 0;
    });

    fromLower = true;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  return fromLower ? sortFromLow() : sortFromHigh();
};

let fromStart = true;

const sortListDeparture = () => {

  const list = document.getElementById("id01");
  const trips = [];
  [...list.children].forEach(trip => trip.tagName !== "SCRIPT" ? trips.push(trip) : null);

  const sortFromStart = () => {

    // Подход аналогичен предыдущему
    // Сортируем по времени отправления
    //
    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_start_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_start_time")[0].innerText;

      if (startTimeA > startTimeB) {
        return 1;
      };
      if (startTimeA < startTimeB) {
        return -1;
      };
      return 0;
    });

    fromStart = false;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  const sortFromEnd = () => {
    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_start_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_start_time")[0].innerText;

      if (startTimeB > startTimeA) {
        return 1;
      };
      if (startTimeB < startTimeA) {
        return -1;
      };
      return 0;
    });

    fromStart = true;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  return fromStart ? sortFromStart() : sortFromEnd();
};

let fromFastestArrival = true;

const sortListArrival = () => {

  const list = document.getElementById("id01");
  const trips = [];
  [...list.children].forEach(trip => trip.tagName !== "SCRIPT" ? trips.push(trip) : null);

  const sortFromStart = () => {

    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_finish_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_finish_time")[0].innerText;

      if (startTimeA > startTimeB) {
        return 1;
      };
      if (startTimeA < startTimeB) {
        return -1;
      };
      return 0;
    });

    fromFastestArrival = false;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  const sortFromEnd = () => {
    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_finish_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_finish_time")[0].innerText;

      if (startTimeB > startTimeA) {
        return 1;
      };
      if (startTimeB < startTimeA) {
        return -1;
      };
      return 0;
    });

    fromFastestArrival = true;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  return fromFastestArrival ? sortFromStart() : sortFromEnd();
};

let fromShortest = true;

const sortListTime = () => {

  const list = document.getElementById("id01");
  const trips = [];
  [...list.children].forEach(trip => trip.tagName !== "SCRIPT" ? trips.push(trip) : null);

  const sortFromShort = () => {
    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_time")[0].innerText;

      if (startTimeA > startTimeB) {
        return 1;
      };
      if (startTimeA < startTimeB) {
        return -1;
      };
      return 0;
    });

    fromShortest = false;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  const sortFromLong = () => {
    const sortedTrips = trips.sort((a, b) => {

      const startTimeA = a.getElementsByClassName("single_trip_time")[0].innerText;
      const startTimeB = b.getElementsByClassName("single_trip_time")[0].innerText;

      if (startTimeB > startTimeA) {
        return 1;
      };
      if (startTimeB < startTimeA) {
        return -1;
      };
      return 0;
    });

    fromShortest = true;

    return sortedTrips.forEach(trip => list.appendChild(trip));
  };

  return fromShortest ? sortFromShort() : sortFromLong();
};