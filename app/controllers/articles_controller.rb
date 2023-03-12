class ArticlesController < ApplicationController
  before_action :get_article, only: [:show, :update, :edit, :destroy]
  before_action :authenticate_user!, except: [:show, :index]
  before_action :require_same_user, only: [:edit, :update, :destroy]




  def show
  end

  def index
    @articles = Article.paginate(page: params[:page], per_page: 6)
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    @article.user = current_user

    if @article.save
      flash[:notice] = "Article was created successfully."
      redirect_to article_path(@article)
    else
      render 'new'
    end
  end


  def update
    if @article.update(article_params)
      flash[:notice] = "Article was updated successfully."
      redirect_to @article
    else
      render 'edit'
    end
  end


  def edit
  end


  def destroy
    @article.destroy
    flash[:alert] = "Article deleted successfully."
    redirect_to '/articles'
  end


  private

  def get_article
    @article = Article.find(params[:id])
  end

  def article_params
    params[:article][:category_ids] = params[:category_ids]
    return params.require(:article).permit(:title, :description, category_ids: [])
  end

  def require_same_user
    if (current_user != @article.user && !current_user.admin?)
      flash[:alert] = "You can only edit or delete your own article."
      redirect_to @article
    end
  end


end
