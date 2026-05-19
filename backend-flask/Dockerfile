FROM python:3.10-slim-buster

ENV PORT=5000

WORKDIR /backend-flask

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development

EXPOSE ${PORT}
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=5000"]
#CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=5000", "--reload"]